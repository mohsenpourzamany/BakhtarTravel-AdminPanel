import { useState } from 'react'
import { mockRevenueData } from '../../lib/mockData'

const CHART_W = 600
const CHART_H = 200
const PAD = { top: 20, right: 20, bottom: 30, left: 50 }

export default function RevenueChart() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [period, setPeriod] = useState('This Month')

  const data = mockRevenueData
  const maxVal = Math.max(...data.map(d => d.amount))
  const minVal = 0

  const toX = (i: number) =>
    PAD.left + (i / (data.length - 1)) * (CHART_W - PAD.left - PAD.right)

  const toY = (v: number) =>
    PAD.top + (1 - (v - minVal) / (maxVal - minVal)) * (CHART_H - PAD.top - PAD.bottom)

  const points = data.map((d, i) => `${toX(i)},${toY(d.amount)}`).join(' ')
  const areaPoints = `${toX(0)},${toY(0)} ${points} ${toX(data.length - 1)},${toY(0)}`

  const yLabels = [0, 20000, 40000, 60000, 80000, 100000]

  return (
    <div className="section-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-navy text-sm">Revenue Overview</h3>
        </div>
        <select
          value={period}
          onChange={e => setPeriod(e.target.value)}
          className="text-xs font-medium text-navy border border-gray-200 rounded-lg px-3 py-1.5 outline-none bg-white cursor-pointer"
        >
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${CHART_W} ${CHART_H}`}
          className="w-full"
          style={{ height: 220 }}
          onMouseLeave={() => setHovered(null)}
        >
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Y grid lines + labels */}
          {yLabels.map(v => {
            const y = toY(v)
            return (
              <g key={v}>
                <line x1={PAD.left} y1={y} x2={CHART_W - PAD.right} y2={y}
                  stroke="#F0F3FA" strokeWidth="1" />
                <text x={PAD.left - 6} y={y + 4} textAnchor="end"
                  fontSize="9" fill="#A3AED0" fontFamily="Inter, sans-serif">
                  {v === 0 ? '$0' : `$${v / 1000}K`}
                </text>
              </g>
            )
          })}

          {/* X labels */}
          {data.filter((_, i) => i % 2 === 0).map((d, idx) => {
            const i = idx * 2
            return (
              <text key={i} x={toX(i)} y={CHART_H - 4} textAnchor="middle"
                fontSize="9" fill="#A3AED0" fontFamily="Inter, sans-serif">
                {d.date}
              </text>
            )
          })}

          {/* Area fill */}
          <polygon points={areaPoints} fill="url(#revGrad)" />

          {/* Line */}
          <polyline
            points={points}
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Hover dots + tooltip */}
          {data.map((d, i) => {
            const x = toX(i)
            const y = toY(d.amount)
            const isHov = hovered === i
            return (
              <g key={i}>
                <circle
                  cx={x} cy={y} r={isHov ? 5 : 3}
                  fill={isHov ? '#2563EB' : 'white'}
                  stroke="#2563EB" strokeWidth="2"
                  style={{ cursor: 'pointer', transition: 'r 0.1s' }}
                  onMouseEnter={() => setHovered(i)}
                />
                {isHov && (
                  <g>
                    <rect
                      x={x - 44} y={y - 42}
                      width="88" height="32"
                      rx="8" fill="#1B2559"
                    />
                    <text x={x} y={y - 29} textAnchor="middle"
                      fontSize="9" fill="#A3AED0" fontFamily="Inter, sans-serif">
                      {d.date}, 2025
                    </text>
                    <text x={x} y={y - 16} textAnchor="middle"
                      fontSize="11" fontWeight="600" fill="white" fontFamily="Inter, sans-serif">
                      ${d.amount.toLocaleString()}
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

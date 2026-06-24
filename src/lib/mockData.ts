import type { Booking, Destination, RevenueDataPoint } from '../types'

export const mockBookings: Booking[] = [
  { id: 'BK-1001', customer: { name: 'Ahmad Hussain' }, service: 'Flight',   destination: 'Dubai, UAE',        amount: 320, status: 'Confirmed',  date: 'Jun 16, 2025' },
  { id: 'BK-1002', customer: { name: 'Sara Karim'    }, service: 'Hotel',    destination: 'Istanbul, Turkey',  amount: 450, status: 'Pending',    date: 'Jun 16, 2025' },
  { id: 'BK-1003', customer: { name: 'Omar Zaman'    }, service: 'Tour',     destination: 'Bangkok, Thailand', amount: 180, status: 'Confirmed',  date: 'Jun 15, 2025' },
  { id: 'BK-1004', customer: { name: 'Ali Reza'      }, service: 'Visa',     destination: 'UK',                amount: 90,  status: 'Processing', date: 'Jun 15, 2025' },
  { id: 'BK-1005', customer: { name: 'Fatima Noor'   }, service: 'Transfer', destination: 'Riyadh, KSA',       amount: 70,  status: 'Cancelled',  date: 'Jun 14, 2025' },
]

export const mockDestinations: Destination[] = [
  { rank: 1, name: 'Dubai',   country: 'UAE',          flag: '🇦🇪', bookings: 342, percent: 100 },
  { rank: 2, name: 'Istanbul',country: 'Turkey',       flag: '🇹🇷', bookings: 278, percent: 81  },
  { rank: 3, name: 'Bangkok', country: 'Thailand',     flag: '🇹🇭', bookings: 189, percent: 55  },
  { rank: 4, name: 'Moscow',  country: 'Russia',       flag: '🇷🇺', bookings: 156, percent: 46  },
  { rank: 5, name: 'Riyadh',  country: 'Saudi Arabia', flag: '🇸🇦', bookings: 134, percent: 39  },
]

export const mockRevenueData: RevenueDataPoint[] = [
  { date: 'Jun 1',  amount: 18000 },
  { date: 'Jun 3',  amount: 22000 },
  { date: 'Jun 6',  amount: 35000 },
  { date: 'Jun 8',  amount: 28000 },
  { date: 'Jun 11', amount: 42000 },
  { date: 'Jun 13', amount: 55000 },
  { date: 'Jun 16', amount: 61340 },
  { date: 'Jun 18', amount: 48000 },
  { date: 'Jun 21', amount: 52000 },
  { date: 'Jun 23', amount: 58000 },
  { date: 'Jun 26', amount: 64000 },
  { date: 'Jun 28', amount: 70000 },
  { date: 'Jun 30', amount: 85420 },
]

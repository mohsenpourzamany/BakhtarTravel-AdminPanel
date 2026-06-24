export type BookingStatus = 'Confirmed' | 'Pending' | 'Processing' | 'Cancelled'
export type ServiceType = 'Flight' | 'Hotel' | 'Tour' | 'Visa' | 'Transfer'

export interface Booking {
  id: string
  customer: { name: string; avatar?: string }
  service: ServiceType
  destination: string
  amount: number
  status: BookingStatus
  date: string
}

export interface StatCard {
  label: string
  value: string
  change?: string
  changeType?: 'up' | 'down'
  subLabel?: string
  icon: string
  iconBg: string
  iconColor: string
  valueColor?: string
  note?: string
}

export interface Destination {
  rank: number
  name: string
  country: string
  flag: string
  bookings: number
  percent: number
}

export interface RevenueDataPoint {
  date: string
  amount: number
}

export interface SidebarItem {
  icon: string
  label: string
  path: string
  children?: { label: string; path: string }[]
}

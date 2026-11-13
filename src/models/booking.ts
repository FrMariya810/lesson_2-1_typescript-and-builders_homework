export type BookingStatus = 'new' | 'confirmed'

// HW-А1: добавьте WorkshopId и обязательное поле workshop в Booking.
export type WorkshopId = 'typescript' | 'build'

export interface Booking {
  id: string
  name: string
  seats: number
  status: BookingStatus
  source: 'web'
  workshop: WorkshopId
}

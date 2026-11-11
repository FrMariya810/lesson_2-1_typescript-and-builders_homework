import type { Booking } from '../models/booking'

export function countSeats(items: Booking[]): number {
  let total = 0
  items.forEach((booking) => { total += booking.seats })
  return total
}

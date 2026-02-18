import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { formatPrice } from '@/lib/helper'
import type { Room } from '@/lib/types'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'

interface BookingData {
  checkIn: Date | undefined
  checkOut: Date | undefined
  roomCategory: string
  noOfRoom: number
  adults: number
  children: number
}

const Reservation = ({ room }: { room: Room }) => {
  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: undefined,
    checkOut: undefined,
    roomCategory: room.category,
    noOfRoom: 1,
    adults: 1,
    children: 0,
  })

  return (
    <section className="mt-10 md:mt-0">
      <form className="bg-card-foreground text-background rounded-lg px-6 pt-8 pb-6">
        <div className="relative mb-4 flex items-center justify-between after:bg-primary after:absolute after:-bottom-0.5 after:h-[3.5px] after:w-full after:content-['']">
          <h5 className="font-500 text-300">Reserve: {room.name}</h5>
          <p className="text-300 font-600">{formatPrice(room.price)}</p>
        </div>

        <p className="mb-6">
          The check-in time is at 12:00 PM, and the checkout is at 11:59 AM. If
          you happen to forget any belongings, kindly get in touch with the
          receptionist.
        </p>

        <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          <div>
            <Label className="mb-2">Check In</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full justify-start overflow-hidden text-left font-normal',
                    !bookingData.checkIn && 'text-background',
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {bookingData.checkIn
                    ? format(bookingData.checkIn, 'ppp')
                    : 'Check In'}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={bookingData.checkIn}
                  initialFocus
                  disabled={(date) => {
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)
                    return date < today
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label className="mb-2">Check Out</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full justify-start overflow-hidden text-left font-normal',
                    !bookingData.checkOut && 'text-background',
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {bookingData.checkOut
                    ? format(bookingData.checkOut, 'ppp')
                    : 'Check In'}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={bookingData.checkOut}
                  initialFocus
                  disabled={(date) => {
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)
                    return date < today
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Rooms</Label>
            <Select>
              <SelectTrigger className="data-placeholder:text-background w-full dark:bg-transparent dark:hover:bg-transparent">
                <SelectValue
                  className="capitalize"
                  placeholder={room.category}
                />

                <SelectContent>
                  <SelectItem value={room.category}>{room.category}</SelectItem>
                </SelectContent>
              </SelectTrigger>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>No of Rooms</Label>
            <Input
              type="number"
              min={1}
              max={4}
              name="noOfRoom"
              className="dark:bg-transparent dark:hover:bg-transparent"
              value={bookingData.noOfRoom}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Children</Label>
            <Input
              type="number"
              min={0}
              max={4}
              name="children"
              className="dark:bg-transparent dark:hover:bg-transparent"
              value={bookingData.children}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Adults</Label>
            <Input
              type="number"
              min={1}
              max={4}
              name="adults"
              className="dark:bg-transparent dark:hover:bg-transparent"
              value={bookingData.adults}
            />
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between w-full">
          <p className="font-600 text-200">
            Total: {formatPrice(room.price * bookingData.noOfRoom)}
            <span className="font-300 text-100">
              ({room.price} x {bookingData.noOfRoom})
            </span>
          </p>
          <p className="font-500 text-primary">Applied 50% discount</p>
        </div>

        <Button className="w-full mt-8" type="submit">
          Book Now
        </Button>
      </form>
    </section>
  )
}

export default Reservation

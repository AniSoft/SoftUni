day_reservation = int(input())
month_reservation = int(input())
day_start = int(input())
month_start = int(input())
day_end = int(input())
month_end = int(input())

if day_start - day_reservation >= 10:
    price_room = 25
else:
    price_room = 30

total = price_room * (day_end - day_start)

if month_start- month_reservation >0:
    price_room = 25
    total = price_room * (day_end - day_start)
    total = total - total * 0.2

print(f'Your stay from {day_start}/{month_start} to {day_end}/{month_end} will cost {total:.2f}')

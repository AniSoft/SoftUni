import math

hour = int(input())
minutes = int(input())

time_minutes = hour * 60 + minutes
time_after_15_minutes = time_minutes + 15

hour = time_after_15_minutes / 60
minutes = time_after_15_minutes % 60

hour = math.floor(hour)

if hour == 24:
    hour = 0

if minutes < 10:
    print(f'{hour}:0{minutes}')
else:
    print(f'{hour}:{minutes}')

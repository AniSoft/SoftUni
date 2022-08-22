import math

record_seconds = float(input())
dist = float(input())
time_seconds = float(input())

ivan_time = dist * time_seconds
delay = math.floor((dist / 15)) * 12.5

total = ivan_time + delay
need = abs(record_seconds - total)

if total < record_seconds:
    print(f'Yes, he succeeded! The new world record is {total:.2f} seconds.')
else:
    print(f'No, he failed! He was {need:.2f} seconds slower.')

import math
name = input()
seasons = int(input())
seria = int(input())
time = float(input())

ads = 0.2 * time
movie = time + ads
special_time = seasons * 10

total = movie * seria * seasons + special_time

print(f'Total time needed to watch the {name} series is {math.floor(total)} minutes.')

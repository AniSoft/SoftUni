import math
name=input()
film=int(input())
time=int(input())

lunch_time=time*1/8
rest_time=time*1/4

free=time-lunch_time-rest_time

if free>=film:
    print(f'You have enough time to watch {name} and left with {math.ceil(free-film)} minutes free time.')
else:
    print(f'You don\'t have enough time to watch {name}, you need {math.ceil(film-free)} more minutes.')

import math

time_photo = int(input())
scene = int(input())
time_scene = int(input())

teren_time = time_photo * 0.15
all_time_scene = scene * time_scene

need_time = teren_time + all_time_scene

rest = abs(need_time - time_photo)
if time_photo>need_time:
    print(f'You managed to finish the movie on time! You have {math.ceil(rest)} minutes left!')
else:
    print(f'Time is up! To complete the movie you need {math.ceil(rest)} minutes.')
budget = float(input())
video_number = int(input())
processor_number = int(input())
ram_number = int(input())

all_video = video_number * 250
all_processor = processor_number * 0.35 * all_video
all_ram = ram_number * 0.1 * all_video

total = all_video + all_processor + all_ram

if video_number > processor_number:
    total = total - total * 0.15

rest = abs(budget - total)

if budget > total:
    print(f'You have {rest:.2f} leva left!')
else:
    print(f'Not enough money! You need {rest:.2f} leva more!')

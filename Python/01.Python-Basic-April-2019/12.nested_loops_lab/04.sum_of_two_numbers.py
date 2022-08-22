start_interval = int(input())
end_interval = int(input())
magic_number = int(input())

combinations = 0
has_magic_number = False

for x in range(start_interval, end_interval + 1):
    for y in range(start_interval, end_interval + 1):
        combinations += 1

        if (x + y) == magic_number:
            has_magic_number = True
            break

    if has_magic_number:
        break

if has_magic_number:
    print(f'Combination N:{combinations} ({x} + {y} = {magic_number})')
else:
    print(f'{combinations} combinations - neither equals {magic_number}')

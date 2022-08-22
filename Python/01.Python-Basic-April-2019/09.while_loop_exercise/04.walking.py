steps_counter = 0

while True:
    current_steps = input()
    if current_steps == 'Going home':
        current_steps = int(input())

        steps_counter += current_steps

        if steps_counter >= 10000:
            print("Goal reached! Good job!")
            break
        else:
            print(f'{10000 - steps_counter} more steps to reach goal.')
            break
    else:
        current_steps = int(current_steps)

    steps_counter += current_steps

    if steps_counter >= 10000:
        print("Goal reached! Good job!")
        break
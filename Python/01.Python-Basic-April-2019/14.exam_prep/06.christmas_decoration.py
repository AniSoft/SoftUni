budget = int(input())

command = input()
while command != 'Stop':
    # for index in range(len(command)):
    # for index, char in enumerate(command):
    item_price = 0
    for char in command:
        # if char==' ':
        #   continue

        item_price += ord(char)  # char->int

    if item_price <= budget:
        print(f'Item successfully purchased!')
        budget -= item_price
    else:
        print(f'Not enough money!')
        break

    command = input()

if command == 'Stop':
    print(f'Money left: {budget}')

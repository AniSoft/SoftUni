singer_price = int(input())

total_sum = 0
total_guests_count = 0
command = input()
while command != 'The old_restaurant_no is full':
    guests_count = int(command)
    total_guests_count += guests_count
    couvert_price = 100
    if guests_count >= 5:
        couvert_price = 70

    current_sum = guests_count * couvert_price
    total_sum += current_sum

    command = input()

if total_sum >= singer_price:
    print(f'You have {total_guests_count} guests and {total_sum - singer_price} leva left.')
else:
    print(f'You have {total_guests_count} guests and {total_sum} leva income, but no singer.')

championship_stage = input()
tickets_type = input()
tickets_count = int(input())
has_photos = input()[0]

price = 0
has_free_photos = False
if championship_stage == 'Quarter final':
    if tickets_type == 'Standard':
        price = 55.50
    elif tickets_type == 'Premium':
        price = 105.20
    elif tickets_type == 'VIP':
        price = 118.90
elif championship_stage == 'Semi final':
    if tickets_type == 'Standard':
        price = 75.88
    elif tickets_type == 'Premium':
        price = 125.22
    elif tickets_type == 'VIP':
        price = 300.40
elif championship_stage == 'Final':
    if tickets_type == 'Standard':
        price = 110.10
    elif tickets_type == 'Premium':
        price = 160.66
    elif tickets_type == 'VIP':
        price = 400

total_price = tickets_count * price
if total_price > 4000:
    total_price = total_price - total_price * 0.25
    has_free_photos = True
elif total_price > 2500:
    total_price -= total_price * 0.1

if has_photos == 'Y' and not has_free_photos:
    total_price += tickets_count * 40

print(f'{total_price:.2f}')
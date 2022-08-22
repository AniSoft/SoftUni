bakers = int(input())

total_sum = 0
total_sweets = 0

for i in range(1, bakers + 1):
    baker_name = input()

    cookies_count = 0
    cakes_count = 0
    waffles_count = 0

    sweet_name = input()
    while sweet_name != 'Stop baking!':
        sweet_count = int(input())

        if sweet_name == 'cookies':
            cookies_count += sweet_count
        elif sweet_name == 'cakes':
            cakes_count += sweet_count
        elif sweet_name == 'waffles':
            waffles_count += sweet_count

        sweet_name = input()

    total_sum += cookies_count * 1.5 + cakes_count * 7.8 + waffles_count * 2.3
    total_sweets += cookies_count + cakes_count + waffles_count

    print(f'{baker_name} baked {cookies_count} cookies, {cakes_count} cakes and {waffles_count} waffles.')

print(f'All bakery sold: {total_sweets}')
print(f'Total sum for charity: {total_sum:.2f} lv.')
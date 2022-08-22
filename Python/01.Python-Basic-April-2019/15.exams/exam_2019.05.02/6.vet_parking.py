days = int(input())
hours = int(input())

price = 0
total = 0
for i in range(1, days + 1):
    total_day = 0
    for j in range(1, hours + 1):
        if i % 2 == 0 and j % 2 == 1:
            price = 2.50
        elif i % 2 == 1 and j % 2 == 0:
            price = 1.25
        else:
            price = 1

        total_day += price
    print(f'Day: {i} - {total_day:.2f} leva')

    total += total_day

print(f'Total: {total:.2f} leva')
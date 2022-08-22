nailon_m2 = int(input())
paint_lt = int(input())
adds_lt = int(input())
hours = int(input())

all_nailon = (nailon_m2 + 2) * 1.5
all_paint = (paint_lt + paint_lt * 0.1) * 14.50
all_adds = adds_lt * 5

material = all_nailon + all_paint + all_adds + 0.4
work = material * 0.3 * hours
total = material + work

print(f'Total expenses: {total:.2f} lv.')

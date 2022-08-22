days = int(input())
bakers = int(input())
cakes_count = int(input())
waffles_count = int(input())
pancakes_count = int(input())

cakes_sum = cakes_count * 45
waffles_sum = waffles_count * 5.80
pancakes_sum = pancakes_count * 3.20

sum_per_day = (cakes_sum + waffles_sum + pancakes_sum) * bakers
all_campaign = sum_per_day * days

final = all_campaign - (all_campaign / 8)

print(f"{final:.2f}")

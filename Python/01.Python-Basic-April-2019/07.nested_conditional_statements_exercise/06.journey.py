budget = float(input())
season = input()

place = ""
type_rest = ""
total = 0
if budget <= 100:
    place = "Bulgaria"
    if season == "summer":
        type_rest = "Camp"
        total = budget * 0.30
    elif season == "winter":
        type_rest = "Hotel"
        total = budget * 0.70
elif budget <= 1000:
    place = "Balkans"
    if season == "summer":
        type_rest = "Camp"
        total = budget * 0.40
    elif season == "winter":
        type_rest = "Hotel"
        total = budget * 0.80
elif budget > 1000:
    place = "Europe"
    type_rest = "Hotel"
    total = budget * 0.90

print(f"Somewhere in {place}")
print(f"{type_rest} - {total:.2f}")
month = input()
nights = int(input())

price_studio = 0
price_apartment = 0

if month == "May" or month == "October":
    price_studio = 50
    price_apartment = 65
    if 7 < nights <= 14:
        price_studio = price_studio - price_studio * 0.05
    elif nights > 14:
        price_studio = price_studio - price_studio * 0.3
        price_apartment = price_apartment - price_apartment * 0.1

elif month == "June" or month == "September":
    price_studio = 75.2
    price_apartment = 68.70

    if nights > 14:
        price_studio = price_studio - price_studio * 0.2
        price_apartment = price_apartment - price_apartment * 0.1

elif month == "July" or month == "August":
    price_studio = 76
    price_apartment = 77

    if nights > 14:
        price_apartment = price_apartment - price_apartment * 0.1

total_studio = price_studio * nights
total_apartments = price_apartment * nights

print(f"Apartment: {total_apartments:.2f} lv.")
print(f"Studio: {total_studio:.2f} lv.")

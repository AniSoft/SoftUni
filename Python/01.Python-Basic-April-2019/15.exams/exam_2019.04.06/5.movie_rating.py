film_number = int(input())

rating_top = -10000000000
rating_bottom = 10000000000

film_top = ''
film_bottom = ''

sum_rating = 0
for i in range(1, film_number + 1):
    film_name = input()
    film_rate = float(input())

    if film_rate > rating_top:
        rating_top = film_rate
        film_top = film_name

    if film_rate < rating_top:
        rating_bottom = film_rate
        film_bottom = film_name

    sum_rating += film_rate

average_rating = sum_rating / film_number
print(f'{film_top} is with highest rating: {rating_top:.1f}')
print(f'{film_bottom} is with lowest rating: {rating_bottom:.1f}')
print(f'Average rating: {average_rating:.1f}')
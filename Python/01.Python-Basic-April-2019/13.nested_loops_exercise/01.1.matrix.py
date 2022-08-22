a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    for j in range(a, b + 1):
        for k in range(c, d + 1):
            for l in range(c, d + 1):
                if i != j and k != l:
                    if i + l == j + k:
                        print(f'{i}{j}')
                        print(f'{k}{l}')
                        print(f'')

def is_anagram(s: str, t: str):
    if len(s) != len(t):
        return False
    map = dict()
    for c in s:
        if c in map:
            map[c] += 1
        else:
            map[c] = 1
    print(map)
    for c in t:
        if c in map:
            map[t] -= 1
        else:
            return False
    for val in map.values():
        if val != 0:
            return False
    return True

def main():

main()

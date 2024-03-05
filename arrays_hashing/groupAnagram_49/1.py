from collections import defaultdict

# time O(m * n)
#   m = len(strs), n = avg length of str
#
#
def group_anagram(strs: List[str]):
    res = defaultdict(list) # map charCount to anagram list

    for s in strs:
        count = [0] * 26 # a ... z
        
        for c in s:
            count[ord(c) - ord("a")] += 1

        res[tuple(count)].append(s)

    return res.values()
            

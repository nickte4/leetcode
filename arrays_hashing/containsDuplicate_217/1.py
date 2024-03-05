# time O(1)
#   worst case:
#       pass through nums once to check that
#       either list has no dupes or last 
#       idx holds the dupe
#
def contains_duplicate(self, nums: List[int]):
    num_set = set()
    for n in nums:
        if n in num_set:
            return True
        num_set.add(n)
    return False

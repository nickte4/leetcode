from typing import List

# time O(nlogn)
#   takes nlogn to sort list, takes n to get dictionary from list
#
def top_k_frequent(nums: List[int], k:int):
    # create dictionary mapping nums to their frequency
    numFreq = dict.fromkeys(nums, 0)
    for num in nums:
        numFreq[num] += 1

    # from numFreq, create a list that's sorted by map values
    sorted_numFreq = sorted(numFreq.items(), key=lambda x:x[1], reverse=True)

    # get top k elements
    res = []
    for i in range(k):
        res.append(sorted_numFreq[i][0])
    return res

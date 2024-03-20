def isPalindrome(s):
    clean_str = [c for c in s if c.isalnum() or s.isspace()]
    clean_str = "".join(clean_str)
    clean_str = clean_str.lower()
    if len(clean_str) == 0:
        return True
    return clean_str == clean_str[::-1]


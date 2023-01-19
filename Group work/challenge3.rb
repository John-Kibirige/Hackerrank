# Centers str in width. If width is greater than the length of str, 
# returns a new String of length width with str centered and padded with padstr;
#  otherwise, returns str
 
 # Example 1:
 
 # str: 'me'
 # lenght: 4
 # expected : 'me'
 
 # Example 2
 # str: 'hello'
 # lenght: 11
 # expexted: ''   
 
 
 def centerStr(string, len)
  string.center(len)
 end

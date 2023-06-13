console.log(`-----WAP to check the given string is palindrom or not----`);
function isPalindrome(str)
{
   
   let seprate=str.split("");
   let reverse=seprate.reverse();
   let join=reverse.join('');
   console.log(`\n- Given String :=> "${str}"`);
   console.log(`- Reverse String :=> "${join}"`);
   if(str==join)
   {
      console.log(`- Result :=> "${str}" is Palindrome`);
   }
   else
   {
      console.log(`- Result :=> "${str}" is not Palindrome`);
   }

}
isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");
console.log(`\n--------------------------------------------------------`);
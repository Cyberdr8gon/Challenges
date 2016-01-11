#initialize array
array = ["1","2","3","4","5"]
input = "var"
#menu loop
while !(input=="quit")
	#list array elements
	puts "array:"
	array.each do |item|
		puts item
	end
	puts "--------------------"
	puts "What would you like to delete from array? (enter quit to exit)"
	#take input, make lowercase and remove whitespace for more compatability
	input = gets.chomp.to_int
	#remove input from array

	#array.delete(input) #proper ruby solution

	#More verbose solution:

	#i is a counter for loop
	i = 0
	#start to loop through array (inefficent in larger data sets...see data structures for more info)
	array.each do |integer|
		#if user input is equal to the current value being queried
		if integer = input
			#delete at specified index
			array.delete_at(i)
		end
		#incriment counter to hold position in array
		i+=1
	end
end
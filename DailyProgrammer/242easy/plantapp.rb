#!/usr/bin/env ruby -wKU

require "./function.rb"

if !(ARGV.length == 2)
	puts "Error invalid number of command line arguments"
	puts "\n"
	puts "Usage: (ruby) plantapp.rb [number of people] [number of plants]"
	abort("\n")
end

plants = ARGV[1]
people = ARGV[0]
test = DataInstance.new(plants,people)
result = test.runTest

print "Number of weeks till plants sustain population: #{result} weeks \n"

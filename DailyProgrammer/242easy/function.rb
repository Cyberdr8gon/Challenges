require "./fibonacci.rb"

class DataInstance
	attr_reader :plants, :people
	def initialize(plants, people)
		@plants = plants.to_i
		@people = people.to_i
	end

	def runTest
		testenv = Fibonacci.new(plants)
		result = testenv.weeksToDone(people)
		return result
	end
end


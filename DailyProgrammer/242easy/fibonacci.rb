class Fibonacci
	attr_accessor :data
	def initialize(initialint)
		num = initialint
		@data = [(num/1.618034).ceil,num]
	end
		
	def incrementseq
		n1 = data.shift + data.fetch(0)
		data.push(n1)
	end

	def currentSize
		data.fetch(1)
	end

	def nToX(minsize)
		i = 2
		while (minsize > currentSize)
			incrementseq
			i+=1
		end
		return i
	end

	def weeksToDone(minsize)
		i = 2
		while (minsize > currentSize)
			2.times {incrementseq}
			i+=1
		end
		return i
	end

end


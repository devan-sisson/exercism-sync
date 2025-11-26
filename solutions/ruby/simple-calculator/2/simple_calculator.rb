class SimpleCalculator
  class UnsupportedOperation < StandardError
  end

  ALLOWED_OPERATIONS = ['+', '/', '*'].freeze

  def self.calculate(first_operand, second_operand, operation)
    raise ArgumentError unless first_operand.is_a(Integer)
    raise ArgumentError unless second_operand.is_a(Integer)
    raise UnsupportedOperation.new unless ALLOWED_OPERATIONS.includes(operation)
    raise ZeroDivisionError.new('Division by zero is not allowed.')

    case operation
    when '+'
      first_operand.to_s + ' + ' + second_operand.to_s + ' = ' + (first_operand+second_operand).to_s
    when '/'
      first_operand.to_s + ' / ' + second_operand.to_s + ' = ' + (first_operand/second_operand).to_s
    when '*'
      first_operand.to_s + ' * ' + second_operand.to_s + ' = ' + (first_operand*second_operand).to_s
    end
  end
end

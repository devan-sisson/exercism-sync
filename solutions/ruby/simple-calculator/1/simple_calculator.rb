class SimpleCalculator
  class UnsupportedOperation < StandardError
  end

  ALLOWED_OPERATIONS = ['+', '/', '*'].freeze

  def self.calculate(first_operand, second_operand, operation)
    if second_operand.is_a? (String) or first_operand.is_a?(String)
      raise ArgumentError
    elsif second_operand <= 0 and operation == '/'
      raise "Division by zero is not allowed."
    end

    case operation
    when '+'
      first_operand.to_s + ' + ' + second_operand.to_s + ' = ' + (first_operand+second_operand).to_s
    when '/'
      first_operand.to_s + ' / ' + second_operand.to_s + ' = ' + (first_operand/second_operand).to_s
    when '*'
      first_operand.to_s + ' * ' + second_operand.to_s + ' = ' + (first_operand*second_operand).to_s
    else
      raise UnsupportedOperation
    end
  end
end

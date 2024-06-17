classdef Test < matlab.unittest.TestCase

    methods(Test)
        % Test methods
        function should_not_pass(tc)
            tc.verifyEqual("Food", "Drink")
        end
    end

    methods(Test)
        % Test methods
        function should_pass(tc)
            tc.verifyEqual("Drink", "Drink")
        end
    end
end
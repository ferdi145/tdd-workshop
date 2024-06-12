classdef TestGildedRose < matlab.unittest.TestCase

    methods(Test)
        % Test methods
        function should_not_pass(tc)
            tc.verifyEqual("Food", "Drink")
        end
    end
end
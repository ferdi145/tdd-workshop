using Xunit;

namespace DotnetStarter.Logic.Tests
{
    public class HelloWorldTest
    {
        [Fact]
        public void It_Should_Run() => Assert.Equal(1, 1);
        
        [Fact]
        public void Hello_ReturnsWorld() => Assert.Equal("Drink", "Food");
    }
}
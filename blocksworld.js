var strips = require('strips');
strips.verbose = true;

// Load the domain and problem.
strips.load('./examples/blocksworld5/domain.txt', './examples/blocksworld5/problem.txt', function(domain, problem) {
    // Use A* search to run the problem against the domain.
    var solutions = strips.solve(domain, problem);

    // Display solution.
    var solution = solutions[0];
    console.log('- Solution found in ' + solution.steps + ' steps!');
    for (var i = 0; i < solution.path.length; i++) {
        console.log((i + 1) + '. ' + solution.path[i]);
    }        
});

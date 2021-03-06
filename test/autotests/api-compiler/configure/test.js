exports.check = function(marko, markoCompiler, expect, done) {
    var compiler = require('marko/compiler');
    compiler.configure(); // Use defaults
    expect(compiler.config.writeToDisk).to.equal(true);
    expect(compiler.config.preserveWhitespace).to.equal(false);

    compiler.configure({
        preserveWhitespace: true
    });
    expect(compiler.config.writeToDisk).to.equal(true);
    expect(compiler.config.preserveWhitespace).to.equal(true);

    compiler.configure(); // Use defaults
    expect(compiler.config.writeToDisk).to.equal(true);
    expect(compiler.config.preserveWhitespace).to.equal(false);
    done();
};
var assert = require('assert');
var Tank = require('../src/Tank');


describe('Tank', function(){
    describe('Atirar', function(){
        it('Deve descontar municao depois de atirar', function() {
            var tank = new Tank();
            tank.setMunicoes(1);
            tank.dispararEm(1, 1);
            assert.equal(0, tank.getMunicoes());
        });

        it('Deve ter municao para poder atirar', function() {
            var tank = new Tank();
            tank.setMunicoes(1);
            assert.true(tank.dispararEm(1, 1)); // Descontado uma municao
            assert.false(tank.dispararEm(1, 1));
        });

        it('Deve ter alcance para poder atirar', function() {
            var tank = new Tank();
            tank.setMunicoes(2);
            tank.setAlcance(10);
            tank.setPosicao(0, 0);
            assert.true(tank.dispararEm(1, 1)); // Descontado uma municao
            assert.false(tank.dispararEm(11, 0));
        });

        it('Atirar para tras', function() {
            var tank = new Tank();
            tank.setMunicoes(1);
            tank.setAlcance(10);
            tank.setPosicao(10, 0);
            assert.true(tank.dispararEm(1, 1));
        });

    });
});
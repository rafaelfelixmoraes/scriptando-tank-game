var assert = require('assert');
var Tank = require('../src/Tank');


describe('Tank', function(){
    describe('Atirar', function(){
        it('Deve descontar municao depois de atirar', function() {
            var tank = new Tank();
            tank.setMunicoes(1);
            assert.equal(true, tank.dispararEm(1, 1));
            assert.equal(0, tank.getMunicoes());
        });

        it('Deve ter municao para poder atirar', function() {
            var tank = new Tank();
            tank.setMunicoes(1);
            assert.equal(true, tank.dispararEm(1, 1)); // Descontado uma municao
            assert.equal(false, tank.dispararEm(1, 1));
        });

        it('Deve ter alcance para poder atirar', function() {
            var tank = new Tank();
            tank.setMunicoes(2);
            tank.setAlcance(10);
            tank.setPosicao(0, 0);
            assert.equal(true, tank.dispararEm(1, 1)); // Descontado uma municao
            assert.equal(false, tank.dispararEm(11, 0));
        });

        it('Atirar para tras', function() {
            var tank = new Tank();
            tank.setMunicoes(1);
            tank.setAlcance(10);
            tank.setPosicao(10, 0);
            assert.equal(true, tank.dispararEm(1, 1));
        });
    });
    describe('Mover', function(){
        it('Movimentacao', function() {
            var tank = new Tank();
            tank.setMovimentacao(10);
            tank.setPosicao(0, 0);
            assert.equal(true, tank.moverPara(0, 5));
            assert.equal(true, tank.moverPara(5, 5));
            assert.equal(false, tank.moverPara(0, 11));
            assert.equal(false, tank.moverPara(5, 6));
        });
    });
    describe('Dano', function() {
        it('Aplicar', function() {        
            // Dano = (Calibre - Blindagem) * 2
            var tank1 = new Tank();
            tank1.setDurabilidade(100);
            tank1.setCalibre(90);
            tank1.setBlindagem(80);
                        
            var tank2 = new Tank();
            tank2.setDurabilidade(100);
            tank2.setCalibre(70);
            tank2.setBlindagem(80);

            tank1.recebeDano(tank2);
            tank2.recebeDano(tank1);
            
            assert.equal(100, tank1.getDurabilidade());
            assert.equal(80, tank2.getDurabilidade());
        });
    });
});
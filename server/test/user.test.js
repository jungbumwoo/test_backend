import assert from "assert";

// 로그인

// 질못된 비밀번호
// 잘못된 아이디

describe('User', function() {
    describe('wrong password', function() {
        it('should return -1 when the value is not present', function() {
        assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('User', function() {
    describe('ID doesnt exsist', function() {
        it('should return -1 when the value is not present', function() {
        assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});
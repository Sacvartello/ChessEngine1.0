const PIECES ={
    Empty:0,
    wP:1,
    wN:2,
    wB:3,
    wR:4,
    wQ:5,
    wK:6,
    bP:7,
    bN:8,
    bB:9,
    bR:10,
    bQ:11,
    bK:12
}
const COUNT_OF_SQUERES= 120
const FILES = {
    FILE_A:0, FILE_B:1, FILE_C:2, FILE_D:3, FILE_E:4, FILE_F:5, FILE_G:6, FILE_H:7, FILE_NONE:8
}
const RANKS ={
    RANK_1:0, RANK_2:1, RANK_3:2, RANK_4:3, RANK_5:4, RANK_6:5, RANK_7:6, RANK_8:7, RANK_NONE:8
}
const COLORS = {
    WHITE:0,
    BLACK:1,
    BOTH:2
}

CASTLEBIT = {WKCA:1,WQCA:2,BKCA:4,BQCA:8}

const SQUARES = {
A1:21, B1:22, C1:23, D1:24, E1:25, F1:26, G1:27, H1:28, A8:91, B8:92, C8:93, D8:94, E8:95, FB:96, GB:97, HB:98, NO_SQ:99, OFFBOARD: 100
};

const FilesBrd=  [COUNT_OF_SQUERES]
const RanksBrd =  [COUNT_OF_SQUERES]
console.log(FilesBrd);
function FR2SQ(f,r){
    return ((21+ f)+(r* 10))
}

function InitFilesRanksBrd() {
    let index= 0;
    let file =FILES.FILE_A;
    let rank = RANKS.RANK_1;
    let sq = SQUARES.A1;

    for(index = 0; index < COUNT_OF_SQUERES; ++index) {
        FilesBrd[index] = SQUARES.OFFBOARD; 
        RanksBrd[index] = SQUARES.OFFBOARD;
    }

    for(rank= RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
        for(file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
            sq =FR2SQ(file, rank);
            FilesBrd[sq] = file;
            RanksBrd[sq] = rank;
        }
    }
console.log(`FilesBrd[0]: ${FilesBrd[0]}  RanksBrd[0]:  ${RanksBrd[0]}`);
console.log(`FilesBrd[SQUARES.A1]: ${FilesBrd[SQUARES.A1]}  RanksBrd[SQUARES.A1]:  ${RanksBrd[SQUARES.A1]}`);
console.log(`FilesBrd[SQUARES.E8]: ${FilesBrd[SQUARES.E8]}  RanksBrd [SQUARES.E8]:  ${RanksBrd[SQUARES.E8]}`);
}
InitFilesRanksBrd()
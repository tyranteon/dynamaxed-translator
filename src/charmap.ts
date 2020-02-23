export const Charmap = new Map([
  [0x00, " "],
  [0x01, "À"],
  [0x02, "Á"],
  [0x03, "Â"],
  [0x04, "Ç"],
  [0x05, "È"],
  [0x06, "É"],
  [0x07, "Ê"],
  [0x08, "Ë"],
  [0x09, "Ì"],
  [0x0b, "Î"],
  [0x0c, "Ï"],
  [0x0d, "Ò"],
  [0x0e, "Ó"],
  [0x0f, "Ô"],
  [0x10, "Œ"],
  [0x11, "Ù"],
  [0x12, "Ú"],
  [0x13, "Û"],
  [0x14, "Ñ"],
  [0x15, "ß"],
  [0x16, "à"],
  [0x17, "á"],
  [0x19, "ç"],
  [0x1a, "è"],
  [0x1b, "é"],
  [0x1c, "ê"],
  [0x1d, "ë"],
  [0x1e, "ì"],
  [0x20, "î"],
  [0x21, "ï"],
  [0x22, "ò"],
  [0x23, "ó"],
  [0x24, "ô"],
  [0x25, "œ"],
  [0x26, "ù"],
  [0x27, "ú"],
  [0x28, "û"],
  [0x29, "ñ"],
  [0x2a, "º"],
  [0x2b, "ª"],
  [0x2c, "{SUPER_ER}"],
  [0x2d, "&"],
  [0x2e, "+"],
  [0x34, "{LV}"],
  [0x35, "="],
  [0x36, ";"],
  [0x51, "¿"],
  [0x52, "¡"],
  [0x53, "{PK}"],
  // [0x53 54, '{PKMN}'],
  // [0x55 56 57 58 59, '{POKEBLOCK}'],
  [0x5a, "Í"],
  [0x5b, "%"],
  [0x5c, "("],
  [0x5d, ")"],
  [0x68, "â"],
  [0x6f, "í"],
  [0x77, "{UNK_SPACER}"],
  [0x79, "{UP_ARROW}"],
  [0x7a, "{DOWN_ARROW}"],
  [0x7b, "{LEFT_ARROW}"],
  [0x7c, "{RIGHT_ARROW}"],
  [0x84, "{SUPER_E}"],
  [0x85, "<"],
  [0x86, ">"],
  [0xa0, "{SUPER_RE}"],
  [0xa1, "0"],
  [0xa2, "1"],
  [0xa3, "2"],
  [0xa4, "3"],
  [0xa5, "4"],
  [0xa6, "5"],
  [0xa7, "6"],
  [0xa8, "7"],
  [0xa9, "8"],
  [0xaa, "9"],
  [0xab, "!"],
  [0xac, "?"],
  [0xad, "."],
  [0xae, "-"],
  [0xaf, "·"],
  [0xb0, "…"],
  [0xb1, "“"],
  [0xb2, "”"],
  [0xb3, "‘"],
  [0xb4, "'"],
  [0xb5, "♂"],
  [0xb6, "♀"],
  [0xb7, "¥"],
  [0xb8, ","],
  [0xb9, "×"],
  [0xba, "/"],
  [0xbb, "A"],
  [0xbc, "B"],
  [0xbd, "C"],
  [0xbe, "D"],
  [0xbf, "E"],
  [0xc0, "F"],
  [0xc1, "G"],
  [0xc2, "H"],
  [0xc3, "I"],
  [0xc4, "J"],
  [0xc5, "K"],
  [0xc6, "L"],
  [0xc7, "M"],
  [0xc8, "N"],
  [0xc9, "O"],
  [0xca, "P"],
  [0xcb, "Q"],
  [0xcc, "R"],
  [0xcd, "S"],
  [0xce, "T"],
  [0xcf, "U"],
  [0xd0, "V"],
  [0xd1, "W"],
  [0xd2, "X"],
  [0xd3, "Y"],
  [0xd4, "Z"],
  [0xd5, "a"],
  [0xd6, "b"],
  [0xd7, "c"],
  [0xd8, "d"],
  [0xd9, "e"],
  [0xda, "f"],
  [0xdb, "g"],
  [0xdc, "h"],
  [0xdd, "i"],
  [0xde, "j"],
  [0xdf, "k"],
  [0xe0, "l"],
  [0xe1, "m"],
  [0xe2, "n"],
  [0xe3, "o"],
  [0xe4, "p"],
  [0xe5, "q"],
  [0xe6, "r"],
  [0xe7, "s"],
  [0xe8, "t"],
  [0xe9, "u"],
  [0xea, "v"],
  [0xeb, "w"],
  [0xec, "x"],
  [0xed, "y"],
  [0xee, "z"],
  [0xef, "▶"],
  [0xf0, ":"],
  [0xf1, "Ä"],
  [0xf2, "Ö"],
  [0xf3, "Ü"],
  [0xf4, "ä"],
  [0xf5, "ö"],
  [0xf6, "ü"],
  // [0xFC 0C FB, '{TALL_PLUS}'],
  [0xff, "$"],

  [0xfd, "{STRING}"],

  // string placeholders
  /*[0xFD 01, '{PLAYER}'],
  [0xFD 02, '{STR_VAR_1}'],
  [0xFD 03, '{STR_VAR_2}'],
  [0xFD 04, '{STR_VAR_3}'],
  [0xFD 05, '{KUN}'],
  [0xFD 06, '{RIVAL}'],
  // version-dependent strings (originally made for Ruby/Sapphire differences)
  // Emerald uses the Sapphire strings (except for VERSION).
  [0xFD 07, '{VERSION}'], // "EMERALD"
  [0xFD 08, '{AQUA}'],
  [0xFD 09, '{MAGMA}'],
  [0xFD 0A, '{ARCHIE}'],
  [0xFD 0B, '{MAXIE}'],
  [0xFD 0C, '{KYOGRE}'],
  [0xFD 0D, '{GROUDON}'],

  // battle string placeholders

  [0xFD 00, '{B_BUFF1}'],
  [0xFD 01, '{B_BUFF2}'],
  [0xFD 02, '{B_COPY_VAR_1}'],
  [0xFD 03, '{B_COPY_VAR_2}'],
  [0xFD 04, '{B_COPY_VAR_3}'],
  [0xFD 05, '{B_PLAYER_MON1_NAME}'],
  [0xFD 06, '{B_OPPONENT_MON1_NAME}'],
  [0xFD 07, '{B_PLAYER_MON2_NAME}'],
  [0xFD 08, '{B_OPPONENT_MON2_NAME}'],
  [0xFD 09, '{B_LINK_PLAYER_MON1_NAME}'],
  [0xFD 0A, '{B_LINK_OPPONENT_MON1_NAME}'],
  [0xFD 0B, '{B_LINK_PLAYER_MON2_NAME}'],
  [0xFD 0C, '{B_LINK_OPPONENT_MON2_NAME}'],
  [0xFD 0D, '{B_ATK_NAME_WITH_PREFIX_MON1}'],
  [0xFD 0E, '{B_ATK_PARTNER_NAME}'],
  [0xFD 0F, '{B_ATK_NAME_WITH_PREFIX}'],
  [0xFD 10, '{B_DEF_NAME_WITH_PREFIX}'],
  [0xFD 11, '{B_EFF_NAME_WITH_PREFIX}'], // EFF = short for gEffectBattler
  [0xFD 12, '{B_ACTIVE_NAME_WITH_PREFIX}'],
  [0xFD 13, '{B_SCR_ACTIVE_NAME_WITH_PREFIX}'],
  [0xFD 14, '{B_CURRENT_MOVE}'],
  [0xFD 15, '{B_LAST_MOVE}'],
  [0xFD 16, '{B_LAST_ITEM}'],
  [0xFD 17, '{B_LAST_ABILITY}'],
  [0xFD 18, '{B_ATK_ABILITY}'],
  [0xFD 19, '{B_DEF_ABILITY}'],
  [0xFD 1A, '{B_SCR_ACTIVE_ABILITY}'],
  [0xFD 1B, '{B_EFF_ABILITY}'],
  [0xFD 1C, '{B_TRAINER1_CLASS}'],
  [0xFD 1D, '{B_TRAINER1_NAME}'],
  [0xFD 1E, '{B_LINK_PLAYER_NAME}'],
  [0xFD 1F, '{B_LINK_PARTNER_NAME}'],
  [0xFD 20, '{B_LINK_OPPONENT1_NAME}'],
  [0xFD 21, '{B_LINK_OPPONENT2_NAME}'],
  [0xFD 22, '{B_LINK_SCR_TRAINER_NAME}'],
  [0xFD 23, '{B_PLAYER_NAME}'],
  [0xFD 24, '{B_TRAINER1_LOSE_TEXT}'],
  [0xFD 25, '{B_TRAINER1_WIN_TEXT}'],
  [0xFD 26, '{B_26}'],
  [0xFD 27, '{B_PC_CREATOR_NAME}'],
  [0xFD 28, '{B_ATK_PREFIX1}'],
  [0xFD 29, '{B_DEF_PREFIX1}'],
  [0xFD 2A, '{B_ATK_PREFIX2}'],
  [0xFD 2B, '{B_DEF_PREFIX2}'],
  [0xFD 2C, '{B_ATK_PREFIX3}'],
  [0xFD 2D, '{B_DEF_PREFIX3}'],
  [0xFD 2E, '{B_TRAINER2_CLASS}'],
  [0xFD 2F, '{B_TRAINER2_NAME}'],
  [0xFD 30, '{B_TRAINER2_LOSE_TEXT}'],
  [0xFD 31, '{B_TRAINER2_WIN_TEXT}'],
  [0xFD 32, '{B_PARTNER_CLASS}'],
  [0xFD 33, '{B_PARTNER_NAME}'],
  [0xFD 34, '{B_BUFF3}'],

  // indicates the end of a town/city name (before " TOWN" or " CITY")
  [0xFC 00, '{NAME_END}'],

  // special 0xF7 character
  SPECIAL_F7  =   F7

  // more text functions

  [0xFC 01, '{COLOR}'], // use a color listed below right after
  [0xFC 02, '{HIGHLIGHT}'], // same as fc 01
  [0xFC 03, '{SHADOW}'], // same as fc 01
  [0xFC 04, '{COLOR_HIGHLIGHT_SHADOW}'], // takes 3 bytes
  [0xFC 05, '{PALETTE}'], // used in credits
  [0xFC 06, '{SIZE}'], // note that anything other than "SMALL" is invalid
  [0xFC 07, '{UNKNOWN_7}'],
  [0xFC 08, '{PAUSE}'], // manually print the wait byte after this, havent mapped them
  [0xFC 09, '{PAUSE_UNTIL_PRESS}'],
  [0xFC 0A, '{UNKNOWN_A}'],
  [0xFC 0B, '{PLAY_BGM}'],
  [0xFC 0C, '{ESCAPE}'],
  [0xFC 0D, '{SHIFT_TEXT}'],
  [0xFC 0E, '{UNKNOWN_E}'],
  [0xFC 0F, '{UNKNOWN_F}'],
  [0xFC 10, '{PLAY_SE}'],
  [0xFC 11, '{CLEAR}'],
  [0xFC 12, '{SKIP}'],
  [0xFC 13, '{CLEAR_TO}'],
  [0xFC 14, '{MIN_LETTER_SPACING}'],
  [0xFC 15, '{JPN}'],
  [0xFC 16, '{ENG}'],
  [0xFC 17, '{PAUSE_MUSIC}'],
  [0xFC 18, '{RESUME_MUSIC}'],

  // colors

  [0x00, '{TRANSPARENT}'],
  [0x01, '{WHITE}'],
  [0x02, '{DARK_GREY}'],
  [0x03, '{LIGHT_GREY}'],
  [0x04, '{RED}'],
  [0x05, '{LIGHT_RED}'],
  [0x06, '{GREEN}'],
  [0x07, '{LIGHT_GREEN}'],
  [0x08, '{BLUE}'],
  [0x09, '{LIGHT_BLUE}'],
  // these next colors can be set to anything arbitrary at runtime
  // usually though they'll have the textbox border colors as described below
  [0x0A, '{DYNAMIC_COLOR1}'], // white
  [0x0B, '{DYNAMIC_COLOR2}'], // white with a tinge of green
  [0x0C, '{DYNAMIC_COLOR3}'], // white 2
  [0x0D, '{DYNAMIC_COLOR4}'], // aquamarine
  [0x0E, '{DYNAMIC_COLOR5}'], // blue-green
  [0x0F, '{DYNAMIC_COLOR6}'], // cerulean

  // sound and music

  [0x00 00, '{MUS_DUMMY}'],
  [0x01 00, '{SE_KAIFUKU}'],
  [0x02 00, '{SE_PC_LOGIN}'],
  [0x03 00, '{SE_PC_OFF}'],
  [0x04 00, '{SE_PC_ON}'],
  [0x05 00, '{SE_SELECT}'],
  [0x06 00, '{SE_WIN_OPEN}'],
  [0x07 00, '{SE_WALL_HIT}'],
  [0x08 00, '{SE_DOOR}'],
  [0x09 00, '{SE_KAIDAN}'],
  [0x0A 00, '{SE_DANSA}'],
  [0x0B 00, '{SE_JITENSYA}'],
  [0x0C 00, '{SE_KOUKA_L}'],
  [0x0D 00, '{SE_KOUKA_M}'],
  [0x0E 00, '{SE_KOUKA_H}'],
  [0x0F 00, '{SE_BOWA2}'],
  [0x10 00, '{SE_POKE_DEAD}'],
  [0x11 00, '{SE_NIGERU}'],
  [0x12 00, '{SE_JIDO_DOA}'],
  [0x13 00, '{SE_NAMINORI}'],
  [0x14 00, '{SE_BAN}'],
  [0x15 00, '{SE_PIN}'],
  [0x16 00, '{SE_BOO}'],
  [0x17 00, '{SE_BOWA}'],
  [0x18 00, '{SE_JYUNI}'],
  [0x19 00, '{SE_A}'],
  [0x1A 00, '{SE_I}'],
  [0x1B 00, '{SE_U}'],
  [0x1C 00, '{SE_E}'],
  [0x1D 00, '{SE_O}'],
  [0x1E 00, '{SE_N}'],
  [0x1F 00, '{SE_SEIKAI}'],
  [0x20 00, '{SE_HAZURE}'],
  [0x21 00, '{SE_EXP}'],
  [0x22 00, '{SE_JITE_PYOKO}'],
  [0x23 00, '{SE_MU_PACHI}'],
  [0x24 00, '{SE_TK_KASYA}'],
  [0x25 00, '{SE_FU_ZAKU}'],
  [0x26 00, '{SE_FU_ZAKU2}'],
  [0x27 00, '{SE_FU_ZUZUZU}'],
  [0x28 00, '{SE_RU_GASHIN}'],
  [0x29 00, '{SE_RU_GASYAN}'],
  [0x2A 00, '{SE_RU_BARI}'],
  [0x2B 00, '{SE_RU_HYUU}'],
  [0x2C 00, '{SE_KI_GASYAN}'],
  [0x2D 00, '{SE_TK_WARPIN}'],
  [0x2E 00, '{SE_TK_WARPOUT}'],
  [0x2F 00, '{SE_TU_SAA}'],
  [0x30 00, '{SE_HI_TURUN}'],
  [0x31 00, '{SE_TRACK_MOVE}'],
  [0x32 00, '{SE_TRACK_STOP}'],
  [0x33 00, '{SE_TRACK_HAIKI}'],
  [0x34 00, '{SE_TRACK_DOOR}'],
  [0x35 00, '{SE_MOTER}'],
  [0x36 00, '{SE_CARD}'],
  [0x37 00, '{SE_SAVE}'],
  [0x38 00, '{SE_KON}'],
  [0x39 00, '{SE_KON2}'],
  [0x3A 00, '{SE_KON3}'],
  [0x3B 00, '{SE_KON4}'],
  [0x3C 00, '{SE_SUIKOMU}'],
  [0x3D 00, '{SE_NAGERU}'],
  [0x3E 00, '{SE_TOY_C}'],
  [0x3F 00, '{SE_TOY_D}'],
  [0x40 00, '{SE_TOY_E}'],
  [0x41 00, '{SE_TOY_F}'],
  [0x42 00, '{SE_TOY_G}'],
  [0x43 00, '{SE_TOY_A}'],
  [0x44 00, '{SE_TOY_B}'],
  [0x45 00, '{SE_TOY_C1}'],
  [0x46 00, '{SE_MIZU}'],
  [0x47 00, '{SE_HASHI}'],
  [0x48 00, '{SE_DAUGI}'],
  [0x49 00, '{SE_PINPON}'],
  [0x4A 00, '{SE_FUUSEN1}'],
  [0x4B 00, '{SE_FUUSEN2}'],
  [0x4C 00, '{SE_FUUSEN3}'],
  [0x4D 00, '{SE_TOY_KABE}'],
  [0x4E 00, '{SE_TOY_DANGO}'],
  [0x4F 00, '{SE_DOKU}'],
  [0x50 00, '{SE_ESUKA}'],
  [0x51 00, '{SE_T_AME}'],
  [0x52 00, '{SE_T_AME_E}'],
  [0x53 00, '{SE_T_OOAME}'],
  [0x54 00, '{SE_T_OOAME_E}'],
  [0x55 00, '{SE_T_KOAME}'],
  [0x56 00, '{SE_T_KOAME_E}'],
  [0x57 00, '{SE_T_KAMI}'],
  [0x58 00, '{SE_T_KAMI2}'],
  [0x59 00, '{SE_ELEBETA}'],
  [0x5A 00, '{SE_HINSI}'],
  [0x5B 00, '{SE_EXPMAX}'],
  [0x5C 00, '{SE_TAMAKORO}'],
  [0x5D 00, '{SE_TAMAKORO_E}'],
  [0x5E 00, '{SE_BASABASA}'],
  [0x5F 00, '{SE_REGI}'],
  [0x60 00, '{SE_C_GAJI}'],
  [0x61 00, '{SE_C_MAKU_U}'],
  [0x62 00, '{SE_C_MAKU_D}'],
  [0x63 00, '{SE_C_PASI}'],
  [0x64 00, '{SE_C_SYU}'],
  [0x65 00, '{SE_C_PIKON}'],
  [0x66 00, '{SE_REAPOKE}'],
  [0x67 00, '{SE_OP_BASYU}'],
  [0x68 00, '{SE_BT_START}'],
  [0x69 00, '{SE_DENDOU}'],
  [0x6A 00, '{SE_JIHANKI}'],
  [0x6B 00, '{SE_TAMA}'],
  [0x6C 00, '{SE_Z_SCROLL}'],
  [0x6D 00, '{SE_Z_PAGE}'],
  [0x6E 00, '{SE_PN_ON}'],
  [0x6F 00, '{SE_PN_OFF}'],
  [0x70 00, '{SE_Z_SEARCH}'],
  [0x71 00, '{SE_TAMAGO}'],
  [0x72 00, '{SE_TB_START}'],
  [0x73 00, '{SE_TB_KON}'],
  [0x74 00, '{SE_TB_KARA}'],
  [0x75 00, '{SE_BIDORO}'],
  [0x76 00, '{SE_W085}'],
  [0x77 00, '{SE_W085B}'],
  [0x78 00, '{SE_W231}'],
  [0x79 00, '{SE_W171}'],
  [0x7A 00, '{SE_W233}'],
  [0x7B 00, '{SE_W233B}'],
  [0x7C 00, '{SE_W145}'],
  [0x7D 00, '{SE_W145B}'],
  [0x7E 00, '{SE_W145C}'],
  [0x7F 00, '{SE_W240}'],
  [0x80 00, '{SE_W015}'],
  [0x81 00, '{SE_W081}'],
  [0x82 00, '{SE_W081B}'],
  [0x83 00, '{SE_W088}'],
  [0x84 00, '{SE_W016}'],
  [0x85 00, '{SE_W016B}'],
  [0x86 00, '{SE_W003}'],
  [0x87 00, '{SE_W104}'],
  [0x88 00, '{SE_W013}'],
  [0x89 00, '{SE_W196}'],
  [0x8A 00, '{SE_W086}'],
  [0x8B 00, '{SE_W004}'],
  [0x8C 00, '{SE_W025}'],
  [0x8D 00, '{SE_W025B}'],
  [0x8E 00, '{SE_W152}'],
  [0x8F 00, '{SE_W026}'],
  [0x90 00, '{SE_W172}'],
  [0x91 00, '{SE_W172B}'],
  [0x92 00, '{SE_W053}'],
  [0x93 00, '{SE_W007}'],
  [0x94 00, '{SE_W092}'],
  [0x95 00, '{SE_W221}'],
  [0x96 00, '{SE_W221B}'],
  [0x97 00, '{SE_W052}'],
  [0x98 00, '{SE_W036}'],
  [0x99 00, '{SE_W059}'],
  [0x9A 00, '{SE_W059B}'],
  [0x9B 00, '{SE_W010}'],
  [0x9C 00, '{SE_W011}'],
  [0x9D 00, '{SE_W017}'],
  [0x9E 00, '{SE_W019}'],
  [0x9F 00, '{SE_W028}'],
  [0xA0 00, '{SE_W013B}'],
  [0xA1 00, '{SE_W044}'],
  [0xA2 00, '{SE_W029}'],
  [0xA3 00, '{SE_W057}'],
  [0xA4 00, '{SE_W056}'],
  [0xA5 00, '{SE_W250}'],
  [0xA6 00, '{SE_W030}'],
  [0xA7 00, '{SE_W039}'],
  [0xA8 00, '{SE_W054}'],
  [0xA9 00, '{SE_W077}'],
  [0xAA 00, '{SE_W020}'],
  [0xAB 00, '{SE_W082}'],
  [0xAC 00, '{SE_W047}'],
  [0xAD 00, '{SE_W195}'],
  [0xAE 00, '{SE_W006}'],
  [0xAF 00, '{SE_W091}'],
  [0xB0 00, '{SE_W146}'],
  [0xB1 00, '{SE_W120}'],
  [0xB2 00, '{SE_W153}'],
  [0xB3 00, '{SE_W071B}'],
  [0xB4 00, '{SE_W071}'],
  [0xB5 00, '{SE_W103}'],
  [0xB6 00, '{SE_W062}'],
  [0xB7 00, '{SE_W062B}'],
  [0xB8 00, '{SE_W048}'],
  [0xB9 00, '{SE_W187}'],
  [0xBA 00, '{SE_W118}'],
  [0xBB 00, '{SE_W155}'],
  [0xBC 00, '{SE_W122}'],
  [0xBD 00, '{SE_W060}'],
  [0xBE 00, '{SE_W185}'],
  [0xBF 00, '{SE_W014}'],
  [0xC0 00, '{SE_W043}'],
  [0xC1 00, '{SE_W207}'],
  [0xC2 00, '{SE_W207B}'],
  [0xC3 00, '{SE_W215}'],
  [0xC4 00, '{SE_W109}'],
  [0xC5 00, '{SE_W173}'],
  [0xC6 00, '{SE_W280}'],
  [0xC7 00, '{SE_W202}'],
  [0xC8 00, '{SE_W060B}'],
  [0xC9 00, '{SE_W076}'],
  [0xCA 00, '{SE_W080}'],
  [0xCB 00, '{SE_W100}'],
  [0xCC 00, '{SE_W107}'],
  [0xCD 00, '{SE_W166}'],
  [0xCE 00, '{SE_W129}'],
  [0xCF 00, '{SE_W115}'],
  [0xD0 00, '{SE_W112}'],
  [0xD1 00, '{SE_W197}'],
  [0xD2 00, '{SE_W199}'],
  [0xD3 00, '{SE_W236}'],
  [0xD4 00, '{SE_W204}'],
  [0xD5 00, '{SE_W268}'],
  [0xD6 00, '{SE_W070}'],
  [0xD7 00, '{SE_W063}'],
  [0xD8 00, '{SE_W127}'],
  [0xD9 00, '{SE_W179}'],
  [0xDA 00, '{SE_W151}'],
  [0xDB 00, '{SE_W201}'],
  [0xDC 00, '{SE_W161}'],
  [0xDD 00, '{SE_W161B}'],
  [0xDE 00, '{SE_W227}'],
  [0xDF 00, '{SE_W227B}'],
  [0xE0 00, '{SE_W226}'],
  [0xE1 00, '{SE_W208}'],
  [0xE2 00, '{SE_W213}'],
  [0xE3 00, '{SE_W213B}'],
  [0xE4 00, '{SE_W234}'],
  [0xE5 00, '{SE_W260}'],
  [0xE6 00, '{SE_W328}'],
  [0xE7 00, '{SE_W320}'],
  [0xE8 00, '{SE_W255}'],
  [0xE9 00, '{SE_W291}'],
  [0xEA 00, '{SE_W089}'],
  [0xEB 00, '{SE_W239}'],
  [0xEC 00, '{SE_W230}'],
  [0xED 00, '{SE_W281}'],
  [0xEE 00, '{SE_W327}'],
  [0xEF 00, '{SE_W287}'],
  [0xF0 00, '{SE_W257}'],
  [0xF1 00, '{SE_W253}'],
  [0xF2 00, '{SE_W258}'],
  [0xF3 00, '{SE_W322}'],
  [0xF4 00, '{SE_W298}'],
  [0xF5 00, '{SE_W287B}'],
  [0xF6 00, '{SE_W114}'],
  [0xF7 00, '{SE_W063B}'],
  [0xF8 00, '{SE_RG_W_DOOR}'],
  [0xF9 00, '{SE_RG_CARD1}'],
  [0xFA 00, '{SE_RG_CARD2}'],
  [0xFB 00, '{SE_RG_CARD3}'],
  [0xFC 00, '{SE_RG_BAG1}'],
  [0xFD 00, '{SE_RG_BAG2}'],
  [0xFE 00, '{SE_RG_GETTING}'],
  [0xFF 00, '{SE_RG_SHOP}'],
  [0x00 01, '{SE_RG_KITEKI}'],
  [0x01 01, '{SE_RG_HELP_OP}'],
  [0x02 01, '{SE_RG_HELP_CL}'],
  [0x03 01, '{SE_RG_HELP_NG}'],
  [0x04 01, '{SE_RG_DEOMOV}'],
  [0x05 01, '{SE_RG_EXCELLENT}'],
  [0x06 01, '{SE_RG_NAWAMISS}'],
  [0x07 01, '{SE_TOREEYE}'],
  [0x08 01, '{SE_TOREOFF}'],
  [0x09 01, '{SE_HANTEI1}'],
  [0x0A 01, '{SE_HANTEI2}'],
  [0x0B 01, '{SE_CURTAIN}'],
  [0x0C 01, '{SE_CURTAIN1}'],
  [0x0D 01, '{SE_USSOKI}'],
  [0x5E 01, '{MUS_TETSUJI}'],
  [0x5F 01, '{MUS_FIELD13}'],
  [0x60 01, '{MUS_KACHI22}'],
  [0x61 01, '{MUS_KACHI2}'],
  [0x62 01, '{MUS_KACHI3}'],
  [0x63 01, '{MUS_KACHI5}'],
  [0x64 01, '{MUS_PCC}'],
  [0x65 01, '{MUS_NIBI}'],
  [0x66 01, '{MUS_SUIKUN}'],
  [0x67 01, '{MUS_DOORO1}'],
  [0x68 01, '{MUS_DOORO_X1}'],
  [0x69 01, '{MUS_DOORO_X3}'],
  [0x6A 01, '{MUS_MACHI_S2}'],
  [0x6B 01, '{MUS_MACHI_S4}'],
  [0x6C 01, '{MUS_GIM}'],
  [0x6D 01, '{MUS_NAMINORI}'],
  [0x6E 01, '{MUS_DAN01}'],
  [0x6F 01, '{MUS_FANFA1}'],
  [0x70 01, '{MUS_ME_ASA}'],
  [0x71 01, '{MUS_ME_BACHI}'],
  [0x72 01, '{MUS_FANFA4}'],
  [0x73 01, '{MUS_FANFA5}'],
  [0x74 01, '{MUS_ME_WAZA}'],
  [0x75 01, '{MUS_BIJYUTU}'],
  [0x76 01, '{MUS_DOORO_X4}'],
  [0x77 01, '{MUS_FUNE_KAN}'],
  [0x78 01, '{MUS_ME_SHINKA}'],
  [0x79 01, '{MUS_SHINKA}'],
  [0x7A 01, '{MUS_ME_WASURE}'],
  [0x7B 01, '{MUS_SYOUJOEYE}'],
  [0x7C 01, '{MUS_BOYEYE}'],
  [0x7D 01, '{MUS_DAN02}'],
  [0x7E 01, '{MUS_MACHI_S3}'],
  [0x7F 01, '{MUS_ODAMAKI}'],
  [0x80 01, '{MUS_B_TOWER}'],
  [0x81 01, '{MUS_SWIMEYE}'],
  [0x82 01, '{MUS_DAN03}'],
  [0x83 01, '{MUS_ME_KINOMI}'],
  [0x84 01, '{MUS_ME_TAMA}'],
  [0x85 01, '{MUS_ME_B_BIG}'],
  [0x86 01, '{MUS_ME_B_SMALL}'],
  [0x87 01, '{MUS_ME_ZANNEN}'],
  [0x88 01, '{MUS_BD_TIME}'],
  [0x89 01, '{MUS_TEST1}'],
  [0x8A 01, '{MUS_TEST2}'],
  [0x8B 01, '{MUS_TEST3}'],
  [0x8C 01, '{MUS_TEST4}'],
  [0x8D 01, '{MUS_TEST}'],
  [0x8E 01, '{MUS_GOMACHI0}'],
  [0x8F 01, '{MUS_GOTOWN}'],
  [0x90 01, '{MUS_POKECEN}'],
  [0x91 01, '{MUS_NEXTROAD}'],
  [0x92 01, '{MUS_GRANROAD}'],
  [0x93 01, '{MUS_CYCLING}'],
  [0x94 01, '{MUS_FRIENDLY}'],
  [0x95 01, '{MUS_MISHIRO}'],
  [0x96 01, '{MUS_TOZAN}'],
  [0x97 01, '{MUS_GIRLEYE}'],
  [0x98 01, '{MUS_MINAMO}'],
  [0x99 01, '{MUS_ASHROAD}'],
  [0x9A 01, '{MUS_EVENT0}'],
  [0x9B 01, '{MUS_DEEPDEEP}'],
  [0x9C 01, '{MUS_KACHI1}'],
  [0x9D 01, '{MUS_TITLE3}'],
  [0x9E 01, '{MUS_DEMO1}'],
  [0x9F 01, '{MUS_GIRL_SUP}'],
  [0xA0 01, '{MUS_HAGESHII}'],
  [0xA1 01, '{MUS_KAKKOII}'],
  [0xA2 01, '{MUS_KAZANBAI}'],
  [0xA3 01, '{MUS_AQA_0}'],
  [0xA4 01, '{MUS_TSURETEK}'],
  [0xA5 01, '{MUS_BOY_SUP}'],
  [0xA6 01, '{MUS_RAINBOW}'],
  [0xA7 01, '{MUS_AYASII}'],
  [0xA8 01, '{MUS_KACHI4}'],
  [0xA9 01, '{MUS_ROPEWAY}'],
  [0xAA 01, '{MUS_CASINO}'],
  [0xAB 01, '{MUS_HIGHTOWN}'],
  [0xAC 01, '{MUS_SAFARI}'],
  [0xAD 01, '{MUS_C_ROAD}'],
  [0xAE 01, '{MUS_AJITO}'],
  [0xAF 01, '{MUS_M_BOAT}'],
  [0xB0 01, '{MUS_M_DUNGON}'],
  [0xB1 01, '{MUS_FINECITY}'],
  [0xB2 01, '{MUS_MACHUPI}'],
  [0xB3 01, '{MUS_P_SCHOOL}'],
  [0xB4 01, '{MUS_DENDOU}'],
  [0xB5 01, '{MUS_TONEKUSA}'],
  [0xB6 01, '{MUS_MABOROSI}'],
  [0xB7 01, '{MUS_CON_FAN}'],
  [0xB8 01, '{MUS_CONTEST0}'],
  [0xB9 01, '{MUS_MGM0}'],
  [0xBA 01, '{MUS_T_BATTLE}'],
  [0xBB 01, '{MUS_OOAME}'],
  [0xBC 01, '{MUS_HIDERI}'],
  [0xBD 01, '{MUS_RUNECITY}'],
  [0xBE 01, '{MUS_CON_K}'],
  [0xBF 01, '{MUS_EIKOU_R}'],
  [0xC0 01, '{MUS_KARAKURI}'],
  [0xC1 01, '{MUS_HUTAGO}'],
  [0xC2 01, '{MUS_SITENNOU}'],
  [0xC3 01, '{MUS_YAMA_EYE}'],
  [0xC4 01, '{MUS_CONLOBBY}'],
  [0xC5 01, '{MUS_INTER_V}'],
  [0xC6 01, '{MUS_DAIGO}'],
  [0xC7 01, '{MUS_THANKFOR}'],
  [0xC8 01, '{MUS_END}'],
  [0xC9 01, '{MUS_B_FRONTIER}'],
  [0xCA 01, '{MUS_B_ARENA}'],
  [0xCB 01, '{MUS_ME_POINTGET}'],
  [0xCC 01, '{MUS_ME_TORE_EYE}'],
  [0xCD 01, '{MUS_PYRAMID}'],
  [0xCE 01, '{MUS_PYRAMID_TOP}'],
  [0xCF 01, '{MUS_B_PALACE}'],
  [0xD0 01, '{MUS_REKKUU_KOURIN}'],
  [0xD1 01, '{MUS_SATTOWER}'],
  [0xD2 01, '{MUS_ME_SYMBOLGET}'],
  [0xD3 01, '{MUS_B_DOME}'],
  [0xD4 01, '{MUS_B_TUBE}'],
  [0xD5 01, '{MUS_B_FACTORY}'],
  [0xD6 01, '{MUS_VS_REKKU}'],
  [0xD7 01, '{MUS_VS_FRONT}'],
  [0xD8 01, '{MUS_VS_MEW}'],
  [0xD9 01, '{MUS_B_DOME1}'],
  [0xDA 01, '{MUS_BATTLE27}'],
  [0xDB 01, '{MUS_BATTLE31}'],
  [0xDC 01, '{MUS_BATTLE20}'],
  [0xDD 01, '{MUS_BATTLE32}'],
  [0xDE 01, '{MUS_BATTLE33}'],
  [0xDF 01, '{MUS_BATTLE36}'],
  [0xE0 01, '{MUS_BATTLE34}'],
  [0xE1 01, '{MUS_BATTLE35}'],
  [0xE2 01, '{MUS_BATTLE38}'],
  [0xE3 01, '{MUS_BATTLE30}'],
  [0xE4 01, '{MUS_RG_ANNAI}'],
  [0xE5 01, '{MUS_RG_SLOT}'],
  [0xE6 01, '{MUS_RG_AJITO}'],
  [0xE7 01, '{MUS_RG_GYM}'],
  [0xE8 01, '{MUS_RG_PURIN}'],
  [0xE9 01, '{MUS_RG_DEMO}'],
  [0xEA 01, '{MUS_RG_TITLE}'],
  [0xEB 01, '{MUS_RG_GUREN}'],
  [0xEC 01, '{MUS_RG_SHION}'],
  [0xED 01, '{MUS_RG_KAIHUKU}'],
  [0xEE 01, '{MUS_RG_CYCLING}'],
  [0xEF 01, '{MUS_RG_ROCKET}'],
  [0xF0 01, '{MUS_RG_SHOUJO}'],
  [0xF1 01, '{MUS_RG_SHOUNEN}'],
  [0xF2 01, '{MUS_RG_DENDOU}'],
  [0xF3 01, '{MUS_RG_T_MORI}'],
  [0xF4 01, '{MUS_RG_OTSUKIMI}'],
  [0xF5 01, '{MUS_RG_POKEYASHI}'],
  [0xF6 01, '{MUS_RG_ENDING}'],
  [0xF7 01, '{MUS_RG_LOAD01}'],
  [0xF8 01, '{MUS_RG_OPENING}'],
  [0xF9 01, '{MUS_RG_LOAD02}'],
  [0xFA 01, '{MUS_RG_LOAD03}'],
  [0xFB 01, '{MUS_RG_CHAMP_R}'],
  [0xFC 01, '{MUS_RG_VS_GYM}'],
  [0xFD 01, '{MUS_RG_VS_TORE}'],
  [0xFE 01, '{MUS_RG_VS_YASEI}'],
  [0xFF 01, '{MUS_RG_VS_LAST}'],
  [0x00 02, '{MUS_RG_MASARA}'],
  [0x01 02, '{MUS_RG_KENKYU}'],
  [0x02 02, '{MUS_RG_OHKIDO}'],
  [0x03 02, '{MUS_RG_POKECEN}'],
  [0x04 02, '{MUS_RG_SANTOAN}'],
  [0x05 02, '{MUS_RG_NAMINORI}'],
  [0x06 02, '{MUS_RG_P_TOWER}'],
  [0x07 02, '{MUS_RG_SHIRUHU}'],
  [0x08 02, '{MUS_RG_HANADA}'],
  [0x09 02, '{MUS_RG_TAMAMUSI}'],
  [0x0A 02, '{MUS_RG_WIN_TRE}'],
  [0x0B 02, '{MUS_RG_WIN_YASEI}'],
  [0x0C 02, '{MUS_RG_WIN_GYM}'],
  [0x0D 02, '{MUS_RG_KUCHIBA}'],
  [0x0E 02, '{MUS_RG_NIBI}'],
  [0x0F 02, '{MUS_RG_RIVAL1}'],
  [0x10 02, '{MUS_RG_RIVAL2}'],
  [0x11 02, '{MUS_RG_FAN2}'],
  [0x12 02, '{MUS_RG_FAN5}'],
  [0x13 02, '{MUS_RG_FAN6}'],
  [0x14 02, '{MUS_ME_RG_PHOTO}'],
  [0x15 02, '{MUS_RG_TITLEROG}'],
  [0x16 02, '{MUS_RG_GET_YASEI}'],
  [0x17 02, '{MUS_RG_SOUSA}'],
  [0x18 02, '{MUS_RG_SEKAIKAN}'],
  [0x19 02, '{MUS_RG_SEIBETU}'],
  [0x1A 02, '{MUS_RG_JUMP}'],
  [0x1B 02, '{MUS_RG_UNION}'],
  [0x1C 02, '{MUS_RG_NETWORK}'],
  [0x1D 02, '{MUS_RG_OKURIMONO}'],
  [0x1E 02, '{MUS_RG_KINOMIKUI}'],
  [0x1F 02, '{MUS_RG_NANADUNGEON}'],
  [0x20 02, '{MUS_RG_OSHIE_TV}'],
  [0x21 02, '{MUS_RG_NANASHIMA}'],
  [0x22 02, '{MUS_RG_NANAISEKI}'],
  [0x23 02, '{MUS_RG_NANA123}'],
  [0x24 02, '{MUS_RG_NANA45}'],
  [0x25 02, '{MUS_RG_NANA67}'],
  [0x26 02, '{MUS_RG_POKEFUE}'],
  [0x27 02, '{MUS_RG_VS_DEO}'],
  [0x28 02, '{MUS_RG_VS_MYU2}'],
  [0x29 02, '{MUS_RG_VS_DEN}'],
  [0x2A 02, '{MUS_RG_EXEYE}'],
  [0x2B 02, '{MUS_RG_DEOEYE}'],
  [0x2C 02, '{MUS_RG_T_TOWER}'],
  [0x2D 02, '{MUS_RG_SLOWMASARA}'],
  [0x2E 02, '{MUS_RG_TVNOIZE}'],
  [0x2F 02, '{PH_TRAP_BLEND}'],
  [0x30 02, '{PH_TRAP_HELD}'],
  [0x31 02, '{PH_TRAP_SOLO}'],
  [0x32 02, '{PH_FACE_BLEND}'],
  [0x33 02, '{PH_FACE_HELD}'],
  [0x34 02, '{PH_FACE_SOLO}'],
  [0x35 02, '{PH_CLOTH_BLEND}'],
  [0x36 02, '{PH_CLOTH_HELD}'],
  [0x37 02, '{PH_CLOTH_SOLO}'],
  [0x38 02, '{PH_DRESS_BLEND}'],
  [0x39 02, '{PH_DRESS_HELD}'],
  [0x3A 02, '{PH_DRESS_SOLO}'],
  [0x3B 02, '{PH_FLEECE_BLEND}'],
  [0x3C 02, '{PH_FLEECE_HELD}'],
  [0x3D 02, '{PH_FLEECE_SOLO}'],
  [0x3E 02, '{PH_KIT_BLEND}'],
  [0x3F 02, '{PH_KIT_HELD}'],
  [0x40 02, '{PH_KIT_SOLO}'],
  [0x41 02, '{PH_PRICE_BLEND}'],
  [0x42 02, '{PH_PRICE_HELD}'],
  [0x43 02, '{PH_PRICE_SOLO}'],
  [0x44 02, '{PH_LOT_BLEND}'],
  [0x45 02, '{PH_LOT_HELD}'],
  [0x46 02, '{PH_LOT_SOLO}'],
  [0x47 02, '{PH_GOAT_BLEND}'],
  [0x48 02, '{PH_GOAT_HELD}'],
  [0x49 02, '{PH_GOAT_SOLO}'],
  [0x4A 02, '{PH_THOUGHT_BLEND}'],
  [0x4B 02, '{PH_THOUGHT_HELD}'],
  [0x4C 02, '{PH_THOUGHT_SOLO}'],
  [0x4D 02, '{PH_CHOICE_BLEND}'],
  [0x4E 02, '{PH_CHOICE_HELD}'],
  [0x4F 02, '{PH_CHOICE_SOLO}'],
  [0x50 02, '{PH_MOUTH_BLEND}'],
  [0x51 02, '{PH_MOUTH_HELD}'],
  [0x52 02, '{PH_MOUTH_SOLO}'],
  [0x53 02, '{PH_FOOT_BLEND}'],
  [0x54 02, '{PH_FOOT_HELD}'],
  [0x55 02, '{PH_FOOT_SOLO}'],
  [0x56 02, '{PH_GOOSE_BLEND}'],
  [0x57 02, '{PH_GOOSE_HELD}'],
  [0x58 02, '{PH_GOOSE_SOLO}'],
  [0x59 02, '{PH_STRUT_BLEND}'],
  [0x5A 02, '{PH_STRUT_HELD}'],
  [0x5B 02, '{PH_STRUT_SOLO}'],
  [0x5C 02, '{PH_CURE_BLEND}'],
  [0x5D 02, '{PH_CURE_HELD}'],
  [0x5E 02, '{PH_CURE_SOLO}'],
  [0x5F 02, '{PH_NURSE_BLEND}'],
  [0x60 02, '{PH_NURSE_HELD}'],
  [0x61 02, '{PH_NURSE_SOLO}'],

  [0xF8 00, '{A_BUTTON}'],
  [0xF8 01, '{B_BUTTON}'],
  [0xF8 02, '{L_BUTTON}'],
  [0xF8 03, '{R_BUTTON}'],
  [0xF8 04, '{START_BUTTON}'],
  [0xF8 05, '{SELECT_BUTTON}'],
  [0xF8 06, '{DPAD_UP}'],
  [0xF8 07, '{DPAD_DOWN}'],
  [0xF8 08, '{DPAD_LEFT}'],
  [0xF8 09, '{DPAD_RIGHT}'],
  [0xF8 0A, '{DPAD_UPDOWN}'],
  [0xF8 0B, '{DPAD_LEFTRIGHT}'],
  [0xF8 0C, '{DPAD_NONE}'],

  [0xF9 00, '{UP_ARROW_2}'],
  [0xF9 01, '{DOWN_ARROW_2}'],
  [0xF9 02, '{LEFT_ARROW_2}'],
  [0xF9 03, '{RIGHT_ARROW_2}'],
  [0xF9 04, '{PLUS}'],
  [0xF9 05, '{LV_2}'],
  [0xF9 06, '{PP}'],
  [0xF9 07, '{ID}'],
  [0xF9 08, '{NO}'],
  [0xF9 09, '{UNDERSCORE}'],
  [0xF9 0A, '{CIRCLE_1}'],
  [0xF9 0B, '{CIRCLE_2}'],
  [0xF9 0C, '{CIRCLE_3}'],
  [0xF9 0D, '{CIRCLE_4}'],
  [0xF9 0E, '{CIRCLE_5}'],
  [0xF9 0F, '{CIRCLE_6}'],
  [0xF9 10, '{CIRCLE_7}'],
  [0xF9 11, '{CIRCLE_8}'],
  [0xF9 12, '{CIRCLE_9}'],
  [0xF9 13, '{ROUND_LEFT_PAREN}'],
  [0xF9 14, '{ROUND_RIGHT_PAREN}'],
  [0xF9 15, '{CIRCLE_DOT}'],
  [0xF9 16, '{TRIANGLE}'],
  [0xF9 17, '{BIG_MULT_X}'],

  [0xF9 D0, '{EMOJI_UNDERSCORE}'],
  [0xF9 D1, '{EMOJI_PIPE}'],
  [0xF9 D2, '{EMOJI_HIGHBAR}'],
  [0xF9 D3, '{EMOJI_TILDE}'],
  [0xF9 D4, '{EMOJI_LEFT_PAREN}'],
  [0xF9 D5, '{EMOJI_RIGHT_PAREN}'],
  [0xF9 D6, '{EMOJI_UNION}'], // ⊂
  [0xF9 D7, '{EMOJI_GREATER_THAN}'],
  [0xF9 D8, '{EMOJI_LEFT_EYE}'],
  [0xF9 D9, '{EMOJI_RIGHT_EYE}'],
  [0xF9 DA, '{EMOJI_AT}'],
  [0xF9 DB, '{EMOJI_SEMICOLON}'],
  [0xF9 DC, '{EMOJI_PLUS}'],
  [0xF9 DD, '{EMOJI_MINUS}'],
  [0xF9 DE, '{EMOJI_EQUALS}'],
  [0xF9 DF, '{EMOJI_SPIRAL}'],
  [0xF9 E0, '{EMOJI_TONGUE}'],
  [0xF9 E1, '{EMOJI_TRIANGLE_OUTLINE}'],
  [0xF9 E2, '{EMOJI_ACUTE}'],
  [0xF9 E3, '{EMOJI_GRAVE}'],
  [0xF9 E4, '{EMOJI_CIRCLE}'],
  [0xF9 E5, '{EMOJI_TRIANGLE}'],
  [0xF9 E6, '{EMOJI_SQUARE}'],
  [0xF9 E7, '{EMOJI_HEART}'],
  [0xF9 E8, '{EMOJI_MOON}'],
  [0xF9 E9, '{EMOJI_NOTE}'],
  [0xF9 EA, '{EMOJI_BALL}'],
  [0xF9 EB, '{EMOJI_BOLT}'],
  [0xF9 EC, '{EMOJI_LEAF}'],
  [0xF9 ED, '{EMOJI_FIRE}'],
  [0xF9 EE, '{EMOJI_WATER}'],
  [0xF9 EF, '{EMOJI_LEFT_FIST}'],
  [0xF9 F0, '{EMOJI_RIGHT_FIST}'],
  [0xF9 F1, '{EMOJI_BIGWHEEL}'],
  [0xF9 F2, '{EMOJI_SMALLWHEEL}'],
  [0xF9 F3, '{EMOJI_SPHERE}'],
  [0xF9 F4, '{EMOJI_IRRITATED}'],
  [0xF9 F5, '{EMOJI_MISCHIEVOUS}'],
  [0xF9 F6, '{EMOJI_HAPPY}'],
  [0xF9 F7, '{EMOJI_ANGRY}'],
  [0xF9 F8, '{EMOJI_SURPRISED}'],
  [0xF9 F9, '{EMOJI_BIGSMILE}'],
  [0xF9 FA, '{EMOJI_EVIL}'],
  [0xF9 FB, '{EMOJI_TIRED}'],
  [0xF9 FC, '{EMOJI_NEUTRAL}'],
  [0xF9 FD, '{EMOJI_SHOCKED}'],
  [0xF9 FE, '{EMOJI_BIGANGER}'],*/

  [0xfa, "\\l"], // scroll up window text
  [0xfb, "\\p"], // new paragraph
  [0xfe, "\n"] // new line
]);

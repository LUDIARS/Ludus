---
type: "Ludus Game Genre"
title: "格闘ゲーム"
description: "格闘ゲームは、フレーム単位の精密な読み合いと反射神経を核とするジャンル。コマンド入力、ヒットボックス、フレームデータが競技性を支える。"
tags:
  - "ludus"
  - "gameplay"
  - "genre"
  - "fighting"
timestamp: "2026-07-15T00:00:00+09:00"
source_import_id: "src_0001"
source_page_id: "30453028-8e8d-80c8-a2c3-e25b292972dc"
source_graph: "graph/fighting.json"
---

# コア体験

格闘ゲームは、フレーム単位の精密な読み合いと反射神経を核とするジャンル。コマンド入力、ヒットボックス、フレームデータが競技性を支える。

# 主要システム

- [コマンド入力システム](../systems/fighting/s01.md)
- [フレームデータ/硬直システム](../systems/fighting/s02.md)
- [ヒットボックス/判定システム](../systems/fighting/s03.md)
- [ガード/防御システム](../systems/fighting/s04.md)
- [コンボシステム](../systems/fighting/s05.md)
- [必殺技/超必殺技システム](../systems/fighting/s06.md)
- [投げ/投げ抜けシステム](../systems/fighting/s07.md)
- [間合い管理/フットシー](../systems/fighting/s08.md)
- [ジャンプ/空中戦システム](../systems/fighting/s09.md)
- [ヒット確認システム](../systems/fighting/s10.md)
- [画面端/壁コンボ](../systems/fighting/s11.md)
- [リバーサル/割り込みシステム](../systems/fighting/s12.md)

# 実装順序

1. 基本移動と攻撃: 歩き・ジャンプ・パンチキック
2. ヒットボックス判定: 攻撃の当たり判定
3. フレームデータ: 発生・持続・硬直の設定
4. ガードシステム: 防御メカニクス
5. コマンド入力: 必殺技の実装
6. コンボシステム: キャンセルと連続技
7. ゲージと超必殺技: リソース管理
8. 投げとガード崩し: 攻防の多様化
9. 画面端/リバーサル: 高度な戦略要素(オプション)

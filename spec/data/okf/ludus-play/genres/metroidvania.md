---
type: "Ludus Game Genre"
title: "メトロイドヴァニア"
description: "メトロイドヴァニアは、相互接続された広大なマップと能力獲得による探索範囲拡大を核とするジャンル。バックトラッキング、隠し要素、非線形進行が探索の楽しさを生む。"
tags:
  - "ludus"
  - "gameplay"
  - "genre"
  - "metroidvania"
timestamp: "2026-07-15T00:00:00+09:00"
source_import_id: "src_0001"
source_page_id: "30453028-8e8d-8073-8304-c4eea2bf5583"
source_graph: "graph/metroidvania.json"
---

# コア体験

メトロイドヴァニアは、相互接続された広大なマップと能力獲得による探索範囲拡大を核とするジャンル。バックトラッキング、隠し要素、非線形進行が探索の楽しさを生む。

# 主要システム

- [相互接続マップ/シームレス世界](../systems/metroidvania/s01.md)
- [能力ゲート/進行制限](../systems/metroidvania/s02.md)
- [バックトラッキング/再訪問](../systems/metroidvania/s03.md)
- [能力アンロック/パワーアップ](../systems/metroidvania/s04.md)
- [非線形進行/自由度](../systems/metroidvania/s05.md)
- [隠し要素/シークレット](../systems/metroidvania/s06.md)
- [ボス戦/チャレンジ](../systems/metroidvania/s07.md)
- [マップシステム/ナビゲーション](../systems/metroidvania/s08.md)

# 実装順序

1. 基本移動: ジャンプ、歩行、攻撃
2. マップシステム: ルーム接続と記録
3. 能力ゲート: 進行制限の障害
4. 能力アンロック: 新移動手段の獲得
5. バックトラッキング: 過去エリアへの戻り
6. ボス戦: 主要な戦闘
7. 隠し要素: 探索報酬
8. 非線形進行: 複数ルート(オプション)

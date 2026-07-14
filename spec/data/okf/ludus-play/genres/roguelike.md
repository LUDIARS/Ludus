---
type: "Ludus Game Genre"
title: "ローグライク/ローグライト"
description: "ローグライク/ローグライトは、ランダム生成とパーマデスを核とするジャンル。繰り返しプレイによる習熟と、毎回異なる展開が長期的なリプレイ性を生む。"
tags:
  - "ludus"
  - "gameplay"
  - "genre"
  - "roguelike"
timestamp: "2026-07-15T00:00:00+09:00"
source_import_id: "src_0001"
source_page_id: "30453028-8e8d-80b1-9b34-d463f9d52d50"
source_graph: "graph/roguelike.json"
---

# コア体験

ローグライク/ローグライトは、ランダム生成とパーマデスを核とするジャンル。繰り返しプレイによる習熟と、毎回異なる展開が長期的なリプレイ性を生む。

# 主要システム

- [プロシージャル生成/ランダムマップ](../systems/roguelike/s01.md)
- [パーマデス/死亡ペナルティ](../systems/roguelike/s02.md)
- [ターン制/タクティカル戦闘](../systems/roguelike/s03.md)
- [アイテム識別/ランダム効果](../systems/roguelike/s04.md)
- [飢餓/リソース管理](../systems/roguelike/s05.md)
- [レベルアップ/成長システム](../systems/roguelike/s06.md)
- [メタ進行/永続アップグレード](../systems/roguelike/s07.md)
- [シナジー/ビルド構築](../systems/roguelike/s08.md)

# 実装順序

1. プロシージャル生成: ランダムマップの基礎
2. 基本戦闘システム: ターン制またはリアルタイム
3. パーマデス: 死亡とリスタート
4. アイテムシステム: 装備と効果
5. レベルアップ/成長: ラン内の進行
6. 飢餓/リソース: 時間制限
7. メタ進行: 永続的な成長(ローグライト)
8. シナジーシステム: ビルドの深化(オプション)

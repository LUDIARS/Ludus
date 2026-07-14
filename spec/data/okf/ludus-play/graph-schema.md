---
type: "Ludus Property Graph Schema"
title: "Ludus 遊びグラフのスキーマ"
description: "OKF概念文書をプロパティグラフへ投影するためのノード型・エッジ型の契約。"
tags:
  - "ludus"
  - "okf"
  - "property-graph"
  - "schema"
timestamp: "2026-07-15T00:00:00+09:00"
---

# ノード型

| 型 | 説明 |
| --- | --- |
| `Ludus Game Genre` | 遊びのジャンル。主要システムの根。 |
| `Ludus Gameplay System` | ジャンルを構成する主要要素。 |
| `Ludus UX Outcome` | システムが届ける体験上の効果。 |
| `Ludus Domain Element` | システムが扱うドメインの横断的な構成要素。 |
| `Pictor Implementation Candidate` | Pictorが担当できる共通の視覚表現。 |
| `LUDIARS Service` | 実装責務を所有するサービス。 |

# エッジ型

| エッジ | 向き | 意味 |
| --- | --- | --- |
| `HAS_SYSTEM` | Genre → System | ジャンルがそのシステムを主要要素として持つ。 |
| `DELIVERS_UX` | System → UX Outcome | システムが目標とする体験効果。 |
| `USES_DOMAIN_ELEMENT` | System → Domain Element | システムが主に扱うドメイン要素。 |
| `HAS_PICTOR_VISUAL_CANDIDATE` | System → Pictor Candidate | 視覚表現をPictorへ切り出せる候補。 |
| `OWNED_BY` | Pictor Candidate → Service | 実装責務の所有者。 |
| `PRECEDES` | System → System | 実装順序上の先行関係。 |

# 投影データ

[`exports/property-graph.json`](exports/property-graph.json) は、このOKF bundleをグラフDBへ投入するための損失のないノード・エッジ投影である。

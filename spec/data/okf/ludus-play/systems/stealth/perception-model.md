---
type: "Ludus Gameplay System"
title: "知覚モデル"
description: "視野、距離、音、注意方向からNPCが得る証拠を計算する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "stealth"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:stealth:perception-model"
genre_id: "genre:stealth"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

視野、距離、音、注意方向からNPCが得る証拠を計算する。

# 設計思想

知覚規則を一貫させ例外を表示する。

# 主要機能

- 視野角
- 聴覚範囲
- 知覚記憶

# UXへの寄与

- [読み合い](../../ux/4333f56898c1e87e.md)
- [公平感](../../ux/761295392476961e.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [情報とUI](../../domains/information-and-ui.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。

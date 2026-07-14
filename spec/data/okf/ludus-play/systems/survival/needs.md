---
type: "Ludus Gameplay System"
title: "生存指標/ニーズシステム"
description: "プレイヤーの生理的ニーズを数値化し、常に行動を要求する緊張感を生む。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:needs"
genre_id: "genre:survival"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

プレイヤーの生理的ニーズを数値化し、常に行動を要求する緊張感を生む。

# 設計思想

『時間的プレッシャーの可視化』。減少速度が速すぎると焦って探索できず、遅すぎると緊張感がない。複数の指標が同時に減ることでマルチタスクの判断を強いる。

# 主要機能

- 空腹ゲージ (時間経過で減少・0で体力減少)
- 喉の渇き (水分補給の必要性)
- 体温管理 (寒さ・暑さによるダメージ)
- 体力/健康
- スタミナ (走行/作業での消耗)
- 疾病/毒 (治療が必要な状態異常)

# UXへの寄与

- [常時のプレッシャー](../../ux/06a9b61dc5a09b12.md)
- [優先順位判断](../../ux/8ef68de0beda2e14.md)
- [計画性の要求](../../ux/8f4227ef739b64ea.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)
- [情報とUI](../../domains/information-and-ui.md)
- [対人関係とセッション](../../domains/social-and-session.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [UI描画](../../pictor/ui-rendering.md)

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
